/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes }) {
	return (
		<p { ...useBlockProps.save() }>
			<div className='three-box-block'>
				<div className='block'>
					<div className='box-number-title'>
						<div className='box-number'>01</div>
						<div className='box-title'>First</div>
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
						<RichText.Content tagName='h3' value={ attributes.titletext } />
						<RichText.Content tagName='p' value={ attributes.justtext } />
						<form>
							<input type='email' name='EMAIL' placeholder='Your Email' />
							<RichText.Content tagName='button' value={ attributes.btntext } />
						</form>
					</div>
				</div>
			</div>
		</p>
	);
}
