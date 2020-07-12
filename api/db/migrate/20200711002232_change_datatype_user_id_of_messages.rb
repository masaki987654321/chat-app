class ChangeDatatypeUserIdOfMessages < ActiveRecord::Migration[5.2]
	def change
		change_column :messages, :room_id, 'integer USING CAST(room_id AS integer)'
	end
end
