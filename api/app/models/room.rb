class Room < ApplicationRecord
    validates :name, presence: true
    validates :ip, presence: true
end
