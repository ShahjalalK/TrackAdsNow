import { type SchemaTypeDefinition } from 'sanity'
import project from './project-schema'
import Portfolio from './portfolio-schema'
import EmailSignatureReview from './emailSignatureReview'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Portfolio, EmailSignatureReview],
}
