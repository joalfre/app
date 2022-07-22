class ApplicationController < ActionController::Base
  #before_action :require_login
  #helper_method :logged_in?
  before_action :authenticate_user!

  #private
  # def require_login
  #   unless logged_in?
  #     flash[:error] = "No tienes acceso a esta sección"
  #     redirect_to new_login_url
  #   end
  # end
end
