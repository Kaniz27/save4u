import { DynamicIcon } from "@/components/ui/DynamicIcon";
import type { Service } from "@/types";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-brand-gradient py-16 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${service.heroImage})` }}
        aria-hidden
      />
      <div className="container-page relative text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
          <DynamicIcon name={service.icon} size={30} />
        </span>
        <h1 className="mt-6 h1-hero">{service.name}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{service.tagline}</p>
      </div>
    </section>
  );
}
