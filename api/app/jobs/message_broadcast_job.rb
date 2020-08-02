class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    logger.debug(message.inspect)
    ActionCable.server.broadcast("chat_#{message.room_id}", message)
  end
end
