@demoqa_automation
Feature: Elements, Forms, Alerts, Frame & Windows and Widgets

    @textbox
    Scenario: Submit and validate the submission
        Given the user is in Textbox page
        When the populated fields are submitted
        Then the output should match the populated value

    @checkbox
    Scenario: Select and validate the following Checkboxes: (Commands, Veu, Classified, General, Excel)
        Given the user is in Checkbox page
        When I click the required checkbox
        Then the checkbox ticked is validated

    @web_tables
    Scenario: Update Alden's Last Name, Age, Salary then validate the update. - Add 4 new entries.
        Given the user is in WebTables page
        When the user update details for Alden
        Then the details on the table should be updated for Alden

    @links
    Scenario Outline: Validate Response Codes of <link> link.
        Given the user is in Links page
        When the user clicks the <link> link
        Then the user gets the <code> response code
        Examples:
        |link           |code  |
        |Created        |201   |
        |No-Content     |204   |
        |Moved          |301   |
        |Bad-Request    |400   |
        |Unauthorized   |401   |
        |Forbidden      |403   |
        |Not-Found      |404   |  

    @upload_and_download
    Scenario: Upload a file, download the sample file.
        Given the user is in Upload-and-Download page
        When the user uploads a file
        Then the user downloads a file

    @forms
    Scenario: Add First Name, Last Name, Email, Select Other Gender, Mobile Number, Select Date of Birth (12 Aug 1985), Upload Picture, Complete the form and Submit. - Validate submitted entries.
        Given the user is in Forms page
        When the user populates the form
        Then the details are validated

    @alerts-frame-windows
    Scenario Outline: Click each button and validate the window that opened.
        Given the user is in Browser-Windows page
        When the new <link> link is clicked
        Then the <link> is opened
        Examples:
        |link              |
        |tab               |
        |window            |
        |window-message    |

    @date-picker
    Scenario: Select Date 10/21/1991, Date Time October 21, 1991 8:00 AM
        Given the user is in Date-Picker page
        When the user populates the form
        Then the details are validated

    @slider
    Scenario: Move the slider to 90
        Given the user is in Slider page
        When the slider value 90 is selected
        Then the slider value should be 90

    @select-menu
    Scenario Outline: Select the following: Select Value (Another root option), Select One (Other), Old Style (Violet), Multi Select (Black, Blue)
        Given the user is in Select-Menu page
        When the user populates the field of the selection form
        Then the selection form is validated


            