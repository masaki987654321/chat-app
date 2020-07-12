class MessagesController < ApplicationController
	def create
		logger.debug "params log #{message_params.inspect}"
		@message = Message.new(message_params)
		if @message.save
			@messages = Message.where(room_id: message_params[:room_id])
			render json: @messages
			logger.debug "successs"
		else
			logger.debug "fail"
			render json: @message.errors, status: :unprocessable_entity
		end
	end

	# todo messages destroy controller 作成
	def destroy
	end

	private
		def message_params
			params.permit(:text, :ip, :room_id)
		end
end
