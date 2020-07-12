require 'test_helper'

class MessageTest < ActiveSupport::TestCase
	def setup
		@message = Message.new(text: "test", ip: "192.168.2.444", room_id: "980190962")
	end

	test "empty text" do
		@message.text = ""
		assert_not @message.valid?
	end

	test "empty ip" do
		@message.ip = ""
		assert_not @message.valid?
	end

	test "empty room_id" do
		@message.room_id = ""
		assert_not @message.valid?
	end

	test "valid message" do
		assert @message.valid?
	end
end
