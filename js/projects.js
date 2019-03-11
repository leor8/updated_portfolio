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

  // Empty previously added html element
  $(".project_detail_hide").empty();

  let $detail = `<section class="project_detail_section">
                    <div class="project_image"></div>
                    <h3> ${currProject.projectName} </h3>
                    <p> ${currProject.projectDescription} </p>
                </section>`

  $(".project_detail_hide").append($detail);

  // <section class="project_detail_section">
  //             <div class="project_image"></div>
  //             <h3>Market Buddy</h3>
  //             <p>Market Buddy is an application that allows user to select grocery products </p>
  //           </section>

  $(".project_detail_hide").toggleClass('display_project_detail');
  $(".project_image").css("background-image", `url("${currProject.projectImageURL}"`);

  // If anywhere on the screen is clicked when page detail is opened
  $(".display_project_detail").on('click touch', function(event) {
    if(event.target.className == 'project_detail_hide display_project_detail') {
      console.log("here");
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










