class ScoreChannel < ApplicationCable::Channel
  def subscribed
    stream_from "score_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
