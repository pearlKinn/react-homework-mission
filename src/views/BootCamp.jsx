import Status from '@/components/Status';
import { getPbImageURL } from '@/utils';

export default function BootCamp({ item }) {
  return (
    <figure>
      <div className="shrink-0 overflow-hidden rounded md:rounded-lg mb-4">
        <img src={getPbImageURL(item, 'contentImage')} alt={item.title}  className="h-full w-full object-cover"/>
      </div>

      <Status state={item.state} />
      <figcaption>
        <dl>
          <dt className="mb-2 mt-4 text-base font-semibold md:text-xl">
            {item.skillName ? `${item.title} : ${item.skillName}` : item.title}
          </dt>
          <dd className="text-xs font-medium md:text-base lg:text-base lg:font-normal xl:text-lg mb-2">
            {item.description}
          </dd>
        </dl>
      </figcaption>
    </figure>
  );
}
