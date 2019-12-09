class UpdateComment < ActiveRecord::Migration[6.0]
  def change
    change_table :comments do |t|
      t.string :paper_id
    end
  end
end
