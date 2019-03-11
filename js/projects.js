$(document).ready(function() {
  // Loading all projects when page loads

  for(let eachProject in allProjects) {
    let currProject = allProjects[eachProject];

    let $projectHTML = `<div class="singleProeject ${currProject.projectClassName}" style="background-image: url(${currProject.projectImageURL})">
                          <div class="project_hover">
                            <div class="project_title">
                                <h3> ${currProject.projectName} </h3>
                            </div>

                            <div class="project_details">
                              <p class=project_stack> ${stackFormatter(currProject.projectCategory)} </p>
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

    $(`.${currProject.projectClassName}`).on("touchstart", function(event) {
      /* Act on the event */
      $(`.${currProject.projectClassName} > .project_hover`).toggleClass('hover_project_display');
    });

    $(`.${currProject.projectClassName}`).mouseleave(function(event) {
      $(`.${currProject.projectClassName} > .project_hover`).toggleClass('hover_project_display');
    });

    $(`.${currProject.projectClassName}`).on("touchend", function(event) {
      $(`.${currProject.projectClassName} > .project_hover`).toggleClass('hover_project_display');
    });

  }




});

function openDetail(projectIndex) {
  let currProject = allProjects[projectIndex];

  $(".project_detail_hide").toggleClass('display_project_detail');
  $(".project_image").css("background-image", `url("${currProject.projectImageURL}"`);
}


// Helper functions
function stackFormatter(stackArray) {
  let returningString = "";
  stackArray.map(eachStack => {
    returningString += `${eachStack}, `;
  })

  return returningString.substring(0, returningString.length-2);
}










