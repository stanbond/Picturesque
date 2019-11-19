# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  caption    :text             not null
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :user_id, :caption, presence: true
  validate :ensure_attachment

  has_one_attached :photo
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user
  # has_many :comments 

  def ensure_attachment
    unless self.photo.attached?
      errors[:post] << "Must include photo"
    end
  end
end
