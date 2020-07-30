class Room < ApplicationRecord
    has_many :messages
    validates :name, presence: true
    validates :ip, presence: true
    after_create_commit {RoomBroadcastJob.perform_later self}
end
