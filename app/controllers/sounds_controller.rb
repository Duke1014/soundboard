class SoundsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize

    # GET
    def index
        sounds = Sound.all
        render json: sounds, include: :user
    end

    def ping
        user = User.find_by(id: session[:user_id])
        ping = user.sounds.create(name: "pong", sound_url: "pong", description: "pong")
        render json: ping, status: :created
    end

    def user_sounds
        user = User.find_by(id: session[:user_id])
        sounds = user.sounds
        render json: sounds
    end

    # GET :id
    # def show

    # end

    # POST
    def create
        user = User.find_by(id: session[:user_id])
        sound = user.sounds.create!(sound_params)
        render json: sound, status: :created
    end

    # PATCH
    def update
        sound = Sound.find_by(id: params[:id])
        if sound
            sound.update(sound_params)
            render json: sound
        else
            render json: { error: "Sound not found" }, status: :not_found
        end
    end

    # DELETE
    def destroy
        sound = Sound.find_by(id: params[:id])
        sound.destroy
        head :no_content
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
