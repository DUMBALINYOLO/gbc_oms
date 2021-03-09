import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {

      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.id) alert.error(`ID: ${error.msg.id.join()}`);
      if (error.msg.description) alert.error(`Description: ${error.msg.description.join()}`);
      if (error.msg.date) alert.error(`Date: ${error.msg.date.join()}`);
      if (error.msg.status) alert.error(`Status: ${error.msg.status.join()}`);
      if (error.msg.notes) alert.error(`NOTES: ${error.msg.notes.join()}`);

      if (error.msg.klass) alert.error(`STUDENT CLASS: ${error.msg.klass.join()}`);
      if (error.msg.date) alert.error(`DATE: ${error.msg.date.join()}`);
      if (error.msg.recorded_by) alert.error(`DATE: ${error.msg.recorded_by.join()}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.title) alert.error(`TITLE: ${error.msg.title.join()}`);
      if (error.msg.author) alert.error(`AUTHOR: ${error.msg.author.join()}`);
      if (error.msg.publisher) alert.error(`PUBLISHER: ${error.msg.publisher.join()}`);
      if (error.msg.date_published) alert.error(`DATE PUBLISHED: ${error.msg.date_published.join()}`);
      if (error.msg.content) alert.error(`CONTENT: ${error.msg.content.join()}`);
      if (error.msg.created) alert.error(`CREATED: ${error.msg.created.join()}`);
      if (error.msg.approval_status) alert.error(`APPROVAL STATUS: ${error.msg.approval_status.join()}`);
      if (error.msg.file) alert.error(`FILE: ${error.msg.file.join()}`);
      if (error.msg.course) alert.error(`COURSES: ${error.msg.course.join()}`);
      if (error.msg.rating) alert.error(`RATING: ${error.msg.rating.join()}`);
      if (error.msg.curriculum) alert.error(`CURRICULUM: ${error.msg.curriculum.join()}`);
      if (error.msg.subject_code) alert.error(`SUBJECT CODE: ${error.msg.subject_code.join()}`);
      if (error.msg.code) alert.error(`CODE: ${error.msg.code.join()}`);
      if (error.msg.subject_teacher) alert.error(`SUBJECT TEACHER: ${error.msg.subject_teacher.join()}`);
      if (error.msg.subject) alert.error(`SUBJECT: ${error.msg.subject.join()}`);
      if (error.msg.application_date) alert.error(`APPLICATION DATE: ${error.msg.application_date.join()}`);
      if (error.msg.score) alert.error(`SCORE: ${error.msg.score.join()}`);
      if (error.msg.totalmarks) alert.error(`TOTAL MARKS: ${error.msg.totalmarks.join()}`);
      if (error.msg.stream) alert.error(`STREAM: ${error.msg.stream.join()}`);
      if (error.msg.max_population) alert.error(`MAX POPULATION: ${error.msg.max_population.join()}`);
      if (error.msg.population) alert.error(`POPULATION: ${error.msg.population.join()}`);
      if (error.msg.class_teacher) alert.error(`CLASS TEACHER: ${error.msg.class_teacher.join()}`);
      if (error.msg.year) alert.error(`YEAR: ${error.msg.year.join()}`);
      if (error.msg.enr_klass) alert.error(`ENROLLED CLASS: ${error.msg.enr_klass.join()}`);
      if (error.msg.first_name) alert.error(`FULL NAME: ${error.msg.first_name.join()}`);
      if (error.msg.middle_name) alert.error(`MIDDLE NAME: ${error.msg.middle_name.join()}`);
      if (error.msg.last_name) alert.error(`LAST YEAR: ${error.msg.last_name.join()}`);
      if (error.msg.guardian) alert.error(`GUARDIAN: ${error.msg.guardian.join()}`);
      if (error.msg.gender) alert.error(`GENDER: ${error.msg.gender.join()}`);
      if (error.msg.phone_number) alert.error(`PHONE NUMBER: ${error.msg.phone_number.join()}`);
      if (error.msg.whatsapp_number) alert.error(`WHATSAPP NUMBER: ${error.msg.whatsapp_number.join()}`);
      if (error.msg.gender) alert.error(`GENDER: ${error.msg.gender.join()}`);
      if (error.msg.email) alert.error(`EMAIL: ${error.msg.email.join()}`);
      if (error.msg.email) alert.error(`PASSWORD: ${error.msg.password.join()}`);
      if (error.msg.username) alert.error(`USERNAME: ${error.msg.username.join()}`);
      if (error.msg.school) alert.error(`SCHOOL: ${error.msg.school.join()}`);
      if (error.msg.date_of_birth) alert.error(`DATE OF BIRTH: ${error.msg.date_of_birth.join()}`);
      if (error.msg.attendancerecords) alert.error(`ATTENDANCE RECORDS: ${error.msg.attendancerecords.join()}`);
      if (error.msg.profile) alert.error(`PROFILE: ${error.msg.profile.join()}`);

    }


    if (message !== prevProps.message) {
      if (message.taxDeleted) alert.success(message.taxDeleted);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
