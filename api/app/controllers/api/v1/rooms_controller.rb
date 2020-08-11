module Api
	module V1
		class RoomsController < ApplicationController
			before_action :set_room, only: [:show]

			# GET /rooms
			def index
				@rooms = Room.all

				render json: @rooms
			end

			# GET /rooms/:id
			def show
				render json: @room
			end

			# POST /rooms
			def create
				room = Room.new(room_params)
				room.ip = request.remote_ip

				if room.save
				render json: { status: 'SUCCESS', data: room }
				else
				render json: {status: :unprocessable_entity, data: room.errors}
				end
			end

			private
				def set_room
					@room = Room.find(params[:id])
				end

				def room_params
					params.permit(:name)
				end
		end
	end
end
