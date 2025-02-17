import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import PropTypes from "prop-types";
import EditorModal from "../../containers/EditorModal";
import EstimatedReadingTime from "./estimated-reading-time";
import FleschReadingEase from "./flesch-reading-ease";
import ProminentWords from "./prominent-words";
import WordCount from "./word-count";

/**
 * Insights modal component.
 * @param {string} location The location of this modal.
 * @returns {JSX.Element} The element.
 */
const InsightsModal = ( { location } ) => {
	const isElementorEditor = useSelect( select => select( "yoast-seo/editor" ).getIsElementorEditor(), [] );

	return (
		<EditorModal
			title={ __( "Insights", "wordpress-seo" ) }
			id={ `yoast-insights-modal-${ location }` }
			shouldCloseOnClickOutside={ ! isElementorEditor }
			showChangesWarning={ false }
		>
			<div className="yoast-insights yoast-modal-content--columns">
				<ProminentWords location={ location } />
				<div>
					<div className="yoast-insights-row">
						<FleschReadingEase />
					</div>
					<div className="yoast-insights-row yoast-insights-row--columns">
						<EstimatedReadingTime />
						<WordCount />
					</div>
				</div>
			</div>
		</EditorModal>
	);
};

InsightsModal.propTypes = {
	location: PropTypes.string,
};

InsightsModal.defaultProps = {
	location: "sidebar",
};

export default InsightsModal;
