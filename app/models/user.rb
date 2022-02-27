class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, length: { minimum: 4 }
    
    
    has_many :sounds
end
