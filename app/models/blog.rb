# -coding: utf-8 -
class Blog < ActiveRecord::Base
  # 状态常量，发布/草稿
  S_DRAFT = 0
  S_PUBLISH = 1

  attr_accessible :content, :seo_desc, :seo_kwd, :slug, :status, :tag, :title, :category_id

  validates :title, :length => {:in => 5..100}
  validates :content, :length => {:in => 10..100000}
  validates :slug, :uniqueness => true

  before_validation :clean_slug
  before_save :fill_slug
  before_save :fill_html_content

  after_save :update_category_count

  belongs_to :category

  scope :publish, where(:status=>S_PUBLISH)
  scope :draft, where(:status=>S_DRAFT)

  def publish?
    self.status == S_PUBLISH
  end

  #将slug中的非法字符过滤掉
  def clean_slug
    self.slug = self.slug.gsub(/[^a-zA-Z\-0-9]/, '-').downcase if self.slug.present?
  end

  #如果没有slug则用时间戳代替
  def fill_slug
    self.slug = Time.now.to_i.to_s if self.slug.blank?
  end

  #将markup的content转换为html并写入字段
  def fill_html_content
    self.html_content = Klog::Markdown.render(self.content)
  end

  #保存后更新对应的分类的blog_count字段
  def update_category_count
    #TODO:修正这个逻辑
    #新建发布
    if self.status_was.nil? && self.status == S_PUBLISH
      Category.increment_counter(:blog_count, self.category_id)
    else
      #发布草稿
      if self.status_changed? && self.status == S_PUBLISH
        Category.increment_counter(:blog_count, self.category_id)
      #修改已发布文章的分类
      elsif self.category_id_changed?
        Category.increment_counter(:blog_count, self.category_id)
        Category.decrement_counter(:blog_count, self.category_id_was)
      end
    end
  end

end