class PostresController < ApplicationController
  def index
    @postres = Postre.all
  end

  def leer
    @postres = params[:url]
    @postres = Postre.where(url: @postres)
  end

  def crear
    @postres = Postre.new()
  end

  def insertar
    # Subimos el archivo al servidor
    uploaded_file = params[:img]
    File.open(Rails.root.join('public', 'assets/img', uploaded_file.original_filename), 'wb') do |file|
      file.write(uploaded_file.read)
    end
    @postres = Postre.new(parametros)
    # Insertamos un registro en la base de datos
    if @postres.save
      @postres.update_column(:img, uploaded_file.original_filename)
    else
      render :new
    end
    flash[:notice] = "Creado Correctamente!"
    redirect_to "/postres/index"
  end

  def actualizar
  end

  private
  def parametros
    params.permit(:nombre, :precio, :stock, :img, :url)
  end
end
