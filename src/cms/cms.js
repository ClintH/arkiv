import CMS from 'netlify-cms';

//import AboutPagePreview from './preview-templates/AboutPagePreview';
import ProjectPagePreview from './preview-templates/ProjectPagePreview';
//import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css');
//CMS.registerPreviewTemplate('about', AboutPagePreview)
//CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('project', ProjectPagePreview);
