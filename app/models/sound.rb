class Sound < ApplicationRecord
    validates :name, presence: true, length: { maximum: 50 }
    validates :description, presence: true, length: { maximum: 50 }
    validates :sound_url, presence: true  
    
    belongs_to :user
end
