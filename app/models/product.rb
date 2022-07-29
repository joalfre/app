class Product < ApplicationRecord
  has_one_attached :image

  # validate :image_validator

  #private
  #def image_validator
  #  if !image.attached?
  #    errors.add(:image, "is required")
  #  elsif image.content_type.in?(%w(image/png image/jpeg))
  #    errors.add(:image, 'must be an image')
  #  end
  #end
  end
