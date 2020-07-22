require 'test_helper'

class IpAddressesControllerTest < ActionDispatch::IntegrationTest
	test "should get get" do
		get get_ip_url
		assert_response :success
	end

end
