


export default function Slider () {
    return (
  <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://static.wixstatic.com/media/0e2f30_3fcdead0949b4a53aa6cb1a5af98d5d1~mv2.jpg/v1/fill/w_1103,h_494,al_c,q_85,enc_auto/0e2f30_3fcdead0949b4a53aa6cb1a5af98d5d1~mv2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="caroussel__detail">Le juste équilibre entre le style et l'utilité.</h5>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://static.wixstatic.com/media/0e2f30_1b692f642cb14022b98a3732bc63ced3~mv2.jpg/v1/fill/w_1103,h_494,al_c,q_85,enc_auto/0e2f30_1b692f642cb14022b98a3732bc63ced3~mv2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="caroussel__detail">Un monde de couleurs vibrantes</h5>
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://static.wixstatic.com/media/0e2f30_8a680136695b489c8d89fbc8585de9d4~mv2.jpg/v1/fill/w_1103,h_494,al_c,q_85,enc_auto/0e2f30_8a680136695b489c8d89fbc8585de9d4~mv2.jpg]" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="caroussel__detail">Habillez-les pour le printemps</h5>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}