import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/CourseActions';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        console.log(`Saving ${this.state.course.title}`);
        // this.props.dispatch(courseActions.createCourse(this.state.course));
        // this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    }

    createRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.createRow)}
                <h2>Add Course</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}>
                </input>
                <input type="submit"
                    value="SAVE"
                    onClick={this.onClickSave}>
                </input>
            </div>
        );
    }
}

// validation
CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

// map component props to state (store)
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

// dispatch action here
// map component action to action creators (store)
function mapDispatchToProps(dispatch) {
    return {
        // createCourse: (course) => dispatch(courseActions.createCourse(course))
        // createCourse: bindActionCreators(courseActions.createCourse, dispatch)
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// export default CoursesPage;
// export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
