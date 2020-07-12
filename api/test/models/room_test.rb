require 'test_helper'

class RoomTest < ActiveSupport::TestCase

	def setup
		@room = Room.new(name: "test_room", ip: "192.168.0.1111")
	end

	test "valid room" do
		assert @room.valid?
	end

	test "empty name" do
		@room.name = ""
		assert_not @room.valid?
	end

	test "empty ip" do
		@room.ip = ""
		assert_not @room.valid?
	end
end