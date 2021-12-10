class CreateSounds < ActiveRecord::Migration[6.1]
  def change
    create_table :sounds do |t|
      t.string :name
      t.text :description
      t.string :sound_url
      t.integer :user_id

      t.timestamps
    end
  end
end
