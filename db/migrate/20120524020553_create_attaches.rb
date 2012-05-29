class CreateAttaches < ActiveRecord::Migration
  def change
    create_table :attaches do |t|
      t.string :file
      t.string :filename
      t.string :content_type
      t.string :file_size
      t.string :parent_id
      t.string :parent_type

      t.timestamps
    end
  end
end
