class User < ApplicationRecord
    has_secure_password
    
    has_many :sounds

    def batman
        "Nananana"
    end

end
