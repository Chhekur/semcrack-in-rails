class CreatePapers < ActiveRecord::Migration[6.0]
  def change
    create_table :papers do |t|
      t.string :name
      t.string :year
      t.string :description
      
      t.timestamps
    end
  end
end
