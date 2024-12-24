/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps, RichText 
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes} ) {

	
	return (

		
		<p { ...useBlockProps() }>
			<div className='three-box-block'>
				<div className='block'>
					<div className='box-number-title'>
						<div className='box-number'>01</div>
						<div className='box-title'>Team</div>
					</div>
					<h1 className='box-heading'>My First Gutenberg Block</h1>
					<p className='box-content'>My First Gutenberg Block Using React – hello from the saved content!</p>
				</div>
				<div className='block'>
					<div className='box-number-title'>
						<div className='box-number'>02</div>
						<div className='box-title'>Second</div>
					</div>
					<h1 className='box-heading'>My Second Gutenberg Block</h1>
					<p className='box-content'>My Second Gutenberg Block Using React – hello from the saved content!</p>
				</div>
				<div className='block'>
					<div className='box-number-title'>
						<div className='box-number'>03</div>
						<div className='box-title'>Third</div>
					</div>
					<h1 className='box-heading'>My Third Gutenberg Block</h1>
					<p className='box-content'>My Third Gutenberg Block Using React – hello from the saved content!</p>
				</div>
			</div>
			<div className='gutenberg-subscription-block'>
				<div className='gutenberg-block-wrapp'>
					<div className='gutenberg-block-image'>

					</div>
					<div className='gutenberg-block-content'>
						
						<RichText 
							tagName='h3'
							value={ attributes.titletext }
							placeholder='Enter title.....'
							allowedFormats={ [] }
							onChange={ ( titletext ) => setAttributes ( { titletext } )}
						/>
						<RichText 
							tagName='p'
							value={ attributes.justtext }
							placeholder='Type some text here.....'
							allowedFormats={ ["core/bold", "code/italic"] }
							onChange={ ( justtext ) => setAttributes ( { justtext } )}
						/>
						<div>
							<span>Your emails</span>
							<RichText 
								tagName='button'
								value={ attributes.btntext }
								allowedFormats={ [] }
								onChange={ ( btntext ) => setAttributes ( { btntext } )}
							/>
						</div>
					</div>
				</div>
			</div>
		</p>
	);
}
