class MessagesController < ApplicationController
	def create
		logger.debug "params log #{message_params.inspect}"
		@message = Message.new(message_params)
		@message.ip = request.remote_ip
		if @message.save
			render json: { status: 'SUCCESS', data: @message }
		else
			render json: @message.errors, status: :unprocessable_entity
		end
	end

	# todo messages destroy controller 作成
	def destroy
	end

	private
		def message_params
			params.permit(:text, :room_id)
		end
end
