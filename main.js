;(function () {
  const search = document.getElementById('search')
  const profile = document.getElementById('profile')
  const url = 'https://api.github.com/users'
  const client_id = '649111d5b2399de1b79d'
  const client_secret = '961892df3b2a331296b12a93b4e9cd73227939d2'

  async function getUser(user) {
    const profileResponse = await fetch(
      `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
    )

    const profile = profileResponse.json()

    return profile
  }

  function showProfile(user) {
    profile.innerHTML = `<div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="${user.avatar_url}" alt="" class="card-img-top" />
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Repositórios: <span class="badge">${user.public_repos}</span>
              </li>
              <li class="list-group-item">
                Seguidores: <span class="badge">${user.followers}</span>
              </li>
              <li class="list-group-item">
                Seguindo: <span class="badge">${user.following}</span>
              </li>
            </ul>
            <div class="card-body">
              <a
                href="${user.html_url}"
                target="_blank"
                class="btn btn-warning btn-block"
              >
                Ver Perfil
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-8" id="repos"></div>
      </div>`
  }

  search.addEventListener('keyup', e => {
    const user = e.target.value

    if (user.length > 0) {
      getUser(user).then(res => showProfile(res))
    }
  })
})()
