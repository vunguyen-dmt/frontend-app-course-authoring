import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  advanceProblemButtonLabel: {
    id: 'authoring.problemEditor.problemSelect.advanceButton.label',
    defaultMessage: 'Advanced problem types',
    description: 'Button label for advance problem types option',
  },
  advanceMenuTitle: {
    id: 'authoring.problemEditor.advanceProblem.menu.title',
    defaultMessage: 'Advanced problems',
    description: 'Title for advanced problem menu',
  },
  advanceMenuGoBack: {
    id: 'authoring.problemEditor.advanceProblem.menu.goBack',
    defaultMessage: 'Go back',
    description: 'Return to the previous menu that shows basic problem types',
  },
  advanceProblemTypeLabel: {
    id: 'authoring.problemEditor.advanceProblem.problemType.label',
    defaultMessage: '{problemType}',
    description: 'Label for advance problem type radio select',
  },
  problemSupportStatus: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus',
    defaultMessage: '{supportStatus}',
    description: 'Text for advance problem type\'s support status',
  },
  supportStatusTooltipMessage: {
    id: 'authoring.problemEditor.advanceProblem.supportStatus.tooltipMessage',
    defaultMessage: `{supportStatus,  select,
      Provisional {Provisionally supported tools might lack the robustness of functionality
        that your courses require. edX does not have control over the quality of the software,
        or of the content that can be provided using these tools.
        \n \n
        Test these tools thoroughly before using them in your course, especially in graded
        sections. Complete documentstion might not be available for provisionally supported
        tools, or documentation might be available from sources other than edX.}
      Not_supported {Tools with no support are not maintained by edX, and might be deprecated
        in the future. They are not recommened for use in courses due to non-compliance with one
        or more of the base requirements, such as testing, accessibility, internationalization,
        and documentation.}
      other { } 
    }`,
    description: 'Message for support status tooltip',
  },
  previewTitle: {
    id: 'authoring.problemEditor.preview.title',
    defaultMessage: '{previewTitle} problem',
    description: 'Title for the problem preview column',
  },
  previewAltText: {
    id: 'authoring.problemEditor.preview.altText',
    defaultMessage: `A preview illustration of a {problemType, select,
      multiplechoiceresponse {single select}
      stringreponse {text input}
      numericalresponse {numerical input}
      optionresponse {dropdown}
      choiceresponse {multiple select}
      other {null}
    } problem`,
    description: 'Alt text for the illustration of the problem preview',
  },
  previewDescription: {
    id: 'authoring.problemEditor.preview.description',
    defaultMessage: '{previewDescription}',
    description: 'Description of the selected problem type',
  },
  learnMoreButtonLabel: {
    id: 'authoring.problemEditor.learnMoreButtonLabel.label',
    defaultMessage: 'Learn more',
    description: 'Label for Learn more button',
  },
  learnMoreAdvancedButtonLabel: {
    id: 'authoring.problemEditor.advanceProblem.learnMoreButtonLabel.label',
    defaultMessage: 'Learn more about advanced problem types',
    description: 'Label for Learn more about advanced problem types button',
  },
  'authoring.probletype.single-select': {
    id: 'authoring.probletype.single-select',
    defaultMessage: 'Single select',
    description: '',
  },
  'authoring.probletype.multi-select': {
    id: 'authoring.probletype.multi-select',
    defaultMessage: 'Multi-select',
    description: '',
  },
  'authoring.probletype.dropdown': {
    id: 'authoring.probletype.dropdown',
    defaultMessage: 'Dropdown',
    description: '',
  },
  'authoring.probletype.numerical-input': {
    id: 'authoring.probletype.numerical-input',
    defaultMessage: 'Numerical input',
    description: '',
  },
  'authoring.probletype.text-input': {
    id: 'authoring.probletype.text-input',
    defaultMessage: 'Text input',
    description: '',
  },
  'authoring.probletype.advanced-problem': {
    id: 'authoring.probletype.advanced-problem',
    defaultMessage: 'Advanced problem',
    description: '',
  },
  'authoring.probletype.single-select.previewDescription': {
    id: 'authoring.probletype.single-select.previewDescription',
    defaultMessage: 'Learners must select the correct answer from a list of possible options.',
    description: '',
  },
  'authoring.probletype.multi-select.previewDescription': {
    id: 'authoring.probletype.multi-select.previewDescription',
    defaultMessage: 'Learners must select all correct answers from a list of possible options.',
    description: '',
  },
  'authoring.probletype.dropdown.previewDescription': {
    id: 'authoring.probletype.dropdown.previewDescription',
    defaultMessage: 'Learners must select the correct answer from a list of possible options.',
    description: '',
  },
  'authoring.probletype.numerical-input.previewDescription': {
    id: 'authoring.probletype.numerical-input.previewDescription',
    defaultMessage: 'Specify one or more correct numeric answers, submitted in a response field.',
    description: '',
  },
  'authoring.probletype.text-input.previewDescription': {
    id: 'authoring.probletype.text-input.previewDescription',
    defaultMessage: 'Specify one or more correct text answers, including numbers and special characters, submitted in a response field.',
    description: '',
  },
  'authoring.probletype.advanced-problem.previewDescription': {
    id: 'authoring.probletype.advanced-problem.previewDescription',
    defaultMessage: '<div />',
    description: '',
  },
});

export default messages;
