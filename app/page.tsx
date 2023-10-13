import { NextApiRequest } from 'next';
import Navbar from './components/Navbar/Navbar';

export default async function Home(req: NextApiRequest) {
  return (
    <div>
      <Navbar />
      <main className='p-8 pt-[calc(var(--navbar-height)+1rem)]'>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis
          lorem semper, laoreet risus ac, varius justo. Suspendisse tempor, quam
          a commodo cursus, urna tellus aliquam nulla, quis aliquam lectus ex ut
          arcu. Praesent iaculis scelerisque tellus suscipit faucibus. Aliquam
          at aliquam arcu, ac convallis nisi. Cras et ex tempus, finibus nunc
          eget, placerat leo. Nam nec nulla eget lectus sollicitudin aliquet eu
          eu enim. Aliquam maximus condimentum ullamcorper. Aliquam id dolor in
          urna cursus molestie. Integer feugiat magna lacinia nibh luctus,
          congue sollicitudin tortor condimentum. In in ex erat. Vestibulum
          malesuada luctus purus ut luctus. In mi magna, imperdiet in nibh sed,
          dignissim semper nisl. Nunc at enim orci. In id sapien efficitur,
          ullamcorper orci vitae, blandit lectus. Curabitur dignissim sapien id
          consectetur tincidunt. Etiam ac lobortis est, sit amet porttitor est.
          Praesent ante tellus, volutpat quis ante non, commodo bibendum ligula.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, tortor vel auctor lacinia, ligula ligula commodo metus,
          at blandit metus enim sit amet arcu. Aliquam felis odio, ultricies et
          dignissim cursus, eleifend at lectus. Integer bibendum urna sit amet
          ante consequat, a facilisis quam tristique. In ultrices egestas
          laoreet. Nam rutrum enim odio. Phasellus lobortis ipsum sit amet justo
          condimentum, id tempor lorem porttitor. Sed euismod, ipsum eget
          convallis tempor, nisl odio pulvinar dui, sit amet lacinia eros neque
          at justo. Ut vel orci congue, blandit metus id, laoreet magna. Ut at
          metus ac lorem convallis consectetur a eget mauris. Sed risus diam,
          congue a porta et, posuere nec nibh. Integer ultricies gravida dui at
          viverra. Nunc consequat a quam a accumsan. Cras ut nibh fermentum,
          sollicitudin ex in, accumsan tellus. Praesent tristique erat eleifend
          neque luctus vulputate. Vestibulum at nisl eleifend, lacinia quam
          ullamcorper, tincidunt magna. Ut justo massa, sagittis ac maximus sit
          amet, consectetur nec justo. Aliquam vel eleifend dolor. Aliquam ut
          lectus a magna fermentum iaculis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer eget tellus lacus. Nulla placerat
          quam nisi, at sodales massa molestie id. Nullam lacinia, turpis non
          euismod mattis, ante ex volutpat sapien, at vulputate lorem mi a
          magna. Morbi aliquam eros felis, sed ultrices ex sollicitudin ut.
          Mauris in justo rutrum, porttitor lectus at, ultricies ligula. Nulla
          facilisi. Nunc ut consequat massa. Nulla vel purus tempor, eleifend
          nisl nec, posuere massa. Vivamus eu iaculis libero, et molestie sem.
          Etiam varius suscipit velit a facilisis. Cras ac suscipit neque,
          efficitur ullamcorper sapien. Fusce iaculis, libero nec dictum
          placerat, urna magna bibendum ipsum, ut tempor arcu leo id dolor.
          Praesent viverra purus luctus, mattis lacus bibendum, lacinia neque.
          Ut vestibulum metus id sem laoreet, nec vulputate est porttitor. Nunc
          neque metus, gravida vitae tincidunt in, accumsan eu ante. Duis
          consequat ut tortor non finibus. Proin interdum, justo in lacinia
          facilisis, eros mi facilisis lorem, ut placerat ipsum ante eget nisl.
          Donec porttitor ultricies dui, nec ultricies enim mattis a. Proin nec
          enim mollis, malesuada ex ac, ultrices nisi. Nam molestie sodales sem
          et malesuada. Nullam ac nulla rhoncus, semper lacus non, porttitor
          felis. Donec dapibus mattis massa eget ornare. Proin dapibus ex eu
          dignissim consequat. Praesent rhoncus, nisi in tincidunt semper, odio
          risus hendrerit orci, eget maximus nisi neque facilisis tortor. Morbi
          vehicula, nunc at laoreet pulvinar, mauris ex facilisis massa, quis
          mattis diam augue in ex. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae
        </p>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis
          lorem semper, laoreet risus ac, varius justo. Suspendisse tempor, quam
          a commodo cursus, urna tellus aliquam nulla, quis aliquam lectus ex ut
          arcu. Praesent iaculis scelerisque tellus suscipit faucibus. Aliquam
          at aliquam arcu, ac convallis nisi. Cras et ex tempus, finibus nunc
          eget, placerat leo. Nam nec nulla eget lectus sollicitudin aliquet eu
          eu enim. Aliquam maximus condimentum ullamcorper. Aliquam id dolor in
          urna cursus molestie. Integer feugiat magna lacinia nibh luctus,
          congue sollicitudin tortor condimentum. In in ex erat. Vestibulum
          malesuada luctus purus ut luctus. In mi magna, imperdiet in nibh sed,
          dignissim semper nisl. Nunc at enim orci. In id sapien efficitur,
          ullamcorper orci vitae, blandit lectus. Curabitur dignissim sapien id
          consectetur tincidunt. Etiam ac lobortis est, sit amet porttitor est.
          Praesent ante tellus, volutpat quis ante non, commodo bibendum ligula.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, tortor vel auctor lacinia, ligula ligula commodo metus,
          at blandit metus enim sit amet arcu. Aliquam felis odio, ultricies et
          dignissim cursus, eleifend at lectus. Integer bibendum urna sit amet
          ante consequat, a facilisis quam tristique. In ultrices egestas
          laoreet. Nam rutrum enim odio. Phasellus lobortis ipsum sit amet justo
          condimentum, id tempor lorem porttitor. Sed euismod, ipsum eget
          convallis tempor, nisl odio pulvinar dui, sit amet lacinia eros neque
          at justo. Ut vel orci congue, blandit metus id, laoreet magna. Ut at
          metus ac lorem convallis consectetur a eget mauris. Sed risus diam,
          congue a porta et, posuere nec nibh. Integer ultricies gravida dui at
          viverra. Nunc consequat a quam a accumsan. Cras ut nibh fermentum,
          sollicitudin ex in, accumsan tellus. Praesent tristique erat eleifend
          neque luctus vulputate. Vestibulum at nisl eleifend, lacinia quam
          ullamcorper, tincidunt magna. Ut justo massa, sagittis ac maximus sit
          amet, consectetur nec justo. Aliquam vel eleifend dolor. Aliquam ut
          lectus a magna fermentum iaculis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer eget tellus lacus. Nulla placerat
          quam nisi, at sodales massa molestie id. Nullam lacinia, turpis non
          euismod mattis, ante ex volutpat sapien, at vulputate lorem mi a
          magna. Morbi aliquam eros felis, sed ultrices ex sollicitudin ut.
          Mauris in justo rutrum, porttitor lectus at, ultricies ligula. Nulla
          facilisi. Nunc ut consequat massa. Nulla vel purus tempor, eleifend
          nisl nec, posuere massa. Vivamus eu iaculis libero, et molestie sem.
          Etiam varius suscipit velit a facilisis. Cras ac suscipit neque,
          efficitur ullamcorper sapien. Fusce iaculis, libero nec dictum
          placerat, urna magna bibendum ipsum, ut tempor arcu leo id dolor.
          Praesent viverra purus luctus, mattis lacus bibendum, lacinia neque.
          Ut vestibulum metus id sem laoreet, nec vulputate est porttitor. Nunc
          neque metus, gravida vitae tincidunt in, accumsan eu ante. Duis
          consequat ut tortor non finibus. Proin interdum, justo in lacinia
          facilisis, eros mi facilisis lorem, ut placerat ipsum ante eget nisl.
          Donec porttitor ultricies dui, nec ultricies enim mattis a. Proin nec
          enim mollis, malesuada ex ac, ultrices nisi. Nam molestie sodales sem
          et malesuada. Nullam ac nulla rhoncus, semper lacus non, porttitor
          felis. Donec dapibus mattis massa eget ornare. Proin dapibus ex eu
          dignissim consequat. Praesent rhoncus, nisi in tincidunt semper, odio
          risus hendrerit orci, eget maximus nisi neque facilisis tortor. Morbi
          vehicula, nunc at laoreet pulvinar, mauris ex facilisis massa, quis
          mattis diam augue in ex. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae
        </p>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis
          lorem semper, laoreet risus ac, varius justo. Suspendisse tempor, quam
          a commodo cursus, urna tellus aliquam nulla, quis aliquam lectus ex ut
          arcu. Praesent iaculis scelerisque tellus suscipit faucibus. Aliquam
          at aliquam arcu, ac convallis nisi. Cras et ex tempus, finibus nunc
          eget, placerat leo. Nam nec nulla eget lectus sollicitudin aliquet eu
          eu enim. Aliquam maximus condimentum ullamcorper. Aliquam id dolor in
          urna cursus molestie. Integer feugiat magna lacinia nibh luctus,
          congue sollicitudin tortor condimentum. In in ex erat. Vestibulum
          malesuada luctus purus ut luctus. In mi magna, imperdiet in nibh sed,
          dignissim semper nisl. Nunc at enim orci. In id sapien efficitur,
          ullamcorper orci vitae, blandit lectus. Curabitur dignissim sapien id
          consectetur tincidunt. Etiam ac lobortis est, sit amet porttitor est.
          Praesent ante tellus, volutpat quis ante non, commodo bibendum ligula.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin, tortor vel auctor lacinia, ligula ligula commodo metus,
          at blandit metus enim sit amet arcu. Aliquam felis odio, ultricies et
          dignissim cursus, eleifend at lectus. Integer bibendum urna sit amet
          ante consequat, a facilisis quam tristique. In ultrices egestas
          laoreet. Nam rutrum enim odio. Phasellus lobortis ipsum sit amet justo
          condimentum, id tempor lorem porttitor. Sed euismod, ipsum eget
          convallis tempor, nisl odio pulvinar dui, sit amet lacinia eros neque
          at justo. Ut vel orci congue, blandit metus id, laoreet magna. Ut at
          metus ac lorem convallis consectetur a eget mauris. Sed risus diam,
          congue a porta et, posuere nec nibh. Integer ultricies gravida dui at
          viverra. Nunc consequat a quam a accumsan. Cras ut nibh fermentum,
          sollicitudin ex in, accumsan tellus. Praesent tristique erat eleifend
          neque luctus vulputate. Vestibulum at nisl eleifend, lacinia quam
          ullamcorper, tincidunt magna. Ut justo massa, sagittis ac maximus sit
          amet, consectetur nec justo. Aliquam vel eleifend dolor. Aliquam ut
          lectus a magna fermentum iaculis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer eget tellus lacus. Nulla placerat
          quam nisi, at sodales massa molestie id. Nullam lacinia, turpis non
          euismod mattis, ante ex volutpat sapien, at vulputate lorem mi a
          magna. Morbi aliquam eros felis, sed ultrices ex sollicitudin ut.
          Mauris in justo rutrum, porttitor lectus at, ultricies ligula. Nulla
          facilisi. Nunc ut consequat massa. Nulla vel purus tempor, eleifend
          nisl nec, posuere massa. Vivamus eu iaculis libero, et molestie sem.
          Etiam varius suscipit velit a facilisis. Cras ac suscipit neque,
          efficitur ullamcorper sapien. Fusce iaculis, libero nec dictum
          placerat, urna magna bibendum ipsum, ut tempor arcu leo id dolor.
          Praesent viverra purus luctus, mattis lacus bibendum, lacinia neque.
          Ut vestibulum metus id sem laoreet, nec vulputate est porttitor. Nunc
          neque metus, gravida vitae tincidunt in, accumsan eu ante. Duis
          consequat ut tortor non finibus. Proin interdum, justo in lacinia
          facilisis, eros mi facilisis lorem, ut placerat ipsum ante eget nisl.
          Donec porttitor ultricies dui, nec ultricies enim mattis a. Proin nec
          enim mollis, malesuada ex ac, ultrices nisi. Nam molestie sodales sem
          et malesuada. Nullam ac nulla rhoncus, semper lacus non, porttitor
          felis. Donec dapibus mattis massa eget ornare. Proin dapibus ex eu
          dignissim consequat. Praesent rhoncus, nisi in tincidunt semper, odio
          risus hendrerit orci, eget maximus nisi neque facilisis tortor. Morbi
          vehicula, nunc at laoreet pulvinar, mauris ex facilisis massa, quis
          mattis diam augue in ex. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae
        </p>
      </main>
    </div>
  );
}
