import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import pet from './schemas/pet'
import comment from './schemas/comment'
import service from './schemas/service'
import subService from './schemas/subService'
import gallery from './schemas/gallery'

export const schema = {
  // types: [category,post,author,pet,blockContent,comment],
  types:[post,comment,blockContent,service,subService,gallery]
}
