class SoundSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :sound_url, :description

  belongs_to :user
end
