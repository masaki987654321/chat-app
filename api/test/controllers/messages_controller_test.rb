require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
	setup do
		@room = rooms(:one)
	end

	test "should create messages" do
		assert_difference('Message.count') do
			post messages_url, params: {text: "testtttt", room_id: "980190962"}
		end
		assert_response :success
	end

	test "message index" do
		get message_url(@room), as: :json
		assert_response :success
	end
end
