class SoundsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize

    # GET
    def index
        sounds = Sound.all
        render json: sounds, include: :user
    end

    # GET :id
    def show

    end

    # POST
    def create
        user = User.find_by(id: session[:user_id])
        sound = user.sounds.create!(sound_params)
        render json: sound, status: :created
    end

    # PATCH
    def update

    end

    # DELETE
    def destroy

    end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def sound_params
        params.permit(:id, :name, :sound_url, :description)
    end

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end

end
