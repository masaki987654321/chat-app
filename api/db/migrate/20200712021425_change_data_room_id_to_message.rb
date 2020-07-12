class ChangeDataRoomIdToMessage < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :room_id, :string
  end
end
