class UpdatePaperModel < ActiveRecord::Migration[6.0]
  def change
    update_table :papers do |t|
      t.string :user_id
    end
  end
end
