class IpAddressesController < ApplicationController
	def get
		@res = { ip: request.remote_ip }
		render json: { status: 'SUCCESS', data: @res }
	end
end
