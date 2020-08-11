module Api
	module V1
		class MessagesController < ApplicationController

			# get /messages/:id
			def index
				@messages = Message.where(room_id: params[:id])
				render json: @messages
			end

			# post /messages
			def create
				@message = Message.new(message_params)
				@message.ip = request.remote_ip
				if @message.save
					render json: { status: 'SUCCESS', data: @message }
				else
					render json: @message.errors, status: :unprocessable_entity
				end
			end

			private
				def message_params
					params.permit(:text, :room_id)
				end
		end
	end
end
