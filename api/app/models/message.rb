class Message < ApplicationRecord
    belongs_to :room
    
    validates :text, presence: true
    validates :ip, presence: true
    validates :room_id, presence: true

    after_create_commit {MessageBroadcastJob.perform_later self}
end
