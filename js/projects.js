$(document).ready(function() {

  // Loading all projects when page loads

  for(let eachProject in allProjects) {
    let currProject = allProjects[eachProject];

    constructingProjects(currProject, eachProject);

  }


  // If a skill set option is selected

  $('.skill_options').on('change', function() {
    let selected = $('.skill_options').val();

    // Empty all current project
    $('.project_display').empty();

    if(selected == 'all') {
      for(let eachProject in allProjects) {
        let currProject = allProjects[eachProject];
        constructingProjects(currProject, eachProject);
      }
      return;
    }
    for(let eachProject in allProjects) {
      let currProject = allProjects[eachProject];

      if(currProject.projectCategory.includes(selected)) {
        constructingProjects(currProject, eachProject);
      }
    }

  })


});

function openDetail(projectIndex) {
  let currProject = allProjects[projectIndex];

  // Empty previously added html element
  $(".project_detail_hide").empty();

  let $detail = `<section class="project_detail_section">
                    <div class="project_image"></div>
                    <h3> ${currProject.projectName} </h3>
                    <div class="project_analize">
                      <h4 class="project_ana_title">Project Overview</h4>
                      <p class="project_ana_text">${currProject.projectDescriptionOverview}</p>
                      <h4 class="project_ana_title">Project Challenges</h4>
                      <p class="project_ana_text">${currProject.projectDescriptionChallenge}</p>
                      <h4 class="project_ana_title">Project Outcomes</h4>
                      <p class="project_ana_text">${currProject.projectDescriptionLearned}</p>
                    </div>
                    <div class="display_btns">
                      <button class="more basic_btn">More</button>
                      <button class="exit basic_btn">Close</button>
                    </div>

                </section>`

  $(".project_detail_hide").append($detail);


  $(".project_detail_hide").toggleClass('display_project_detail');
  $(".project_image").css("background-image", `url("${currProject.projectImageURL}"`);
  $(".more").on('click touch', function() {
    window.open(currProject.projectGitURL);
  });
  $(".exit").on('click touch', function() {
    $(".project_detail_hide").removeClass('display_project_detail');
  })

  // If anywhere on the screen is clicked when page detail is opened
  $(".display_project_detail").on('click touch', function(event) {
    if(event.target.className == 'project_detail_hide display_project_detail') {
      $(".project_detail_hide").removeClass('display_project_detail');
    }

  })
}


// Helper functions
function stackFormatter(stackArray) {
  let returningString = "";
  stackArray.map(eachStack => {
    returningString += `${eachStack}, `;
  })

  return returningString.substring(0, returningString.length-2);
}

function constructingProjects(currProject, eachProject) {
  let $projectHTML = `<div class="singleProeject ${currProject.projectClassName}" style="background-image: url(${currProject.projectImageURL})">
                        <div class="project_hover">
                          <div class="project_title">
                              <h3> ${currProject.projectName} </h3>
                          </div>

                          <div class="project_details">
                            <p class=project_stack> ${stackFormatter(currProject.projectStack)} </p>
                            <button class="basic_btn" onclick="openDetail('${eachProject}')">Learn More</button>
                          </div>
                        </div>
                      </div> `;

  $('.project_display').append($projectHTML);

  // Adding hover and mobile touch events when elements have becreated
  $(`.${currProject.projectClassName}`).mouseenter(function(event) {
    /* Act on the event */
    $(`.${currProject.projectClassName} > .project_hover`).toggleClass('hover_project_display');
  });

  $(`.${currProject.projectClassName}`).on("tap", function(event) {
    /* Act on the event */
    $(`.${currProject.projectClassName} > .project_hover`).toggleClass('hover_project_display');
  });

  $(`.${currProject.projectClassName}`).mouseleave(function(event) {
    $(`.${currProject.projectClassName} > .project_hover`).toggleClass('hover_project_display');
  });
}









