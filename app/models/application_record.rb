class ApplicationRecord < ActiveRecord::Base
  include Presentable

  self.abstract_class = true
end
