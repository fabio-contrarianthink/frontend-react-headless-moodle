import {
  BookOpen,
  Clock4,
  CreditCard,
  Heart,
  Save,
  Star,
  TrendingUp,
  User,
} from "lucide-react";
import { StatCard } from "../StatCard";
import { Input } from "../Input";
import { InfoCard } from "../InfoCard";
import { useQuery } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import type { Profile } from "@/types/profile";
import profileService from "@/services/profile/profile";
import toast from "react-hot-toast";

const schema = yup
  .object({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .matches(
        /^(\(\d{3}\) \d{3}-\d{4})?$/,
        "Phone must be in format (555) 123-4567",
      )
      .required("Phone is required"),
    address: yup.string().nullable(),
    contactPreference: yup.string().oneOf(["email", "text"]).required(),
  })
  .required();

type FormValues = yup.InferType<typeof schema>;

// Ensure digits only and adds formatting on the fly
function formatPhone(value: string = "") {
  const digits = value.replace(/\D/g, "");
  const part1 = digits.slice(0, 3);
  const part2 = digits.slice(3, 6);
  const part3 = digits.slice(6, 10);
  if (part3) return `(${part1}) ${part2}-${part3}`;
  if (part2) return `(${part1}) ${part2}`;
  if (part1) return `(${part1}`;
  return "";
}

const Skeleton = () => (
  <div className="flex flex-col px-4 md:px-6 max-w-4xl mx-auto gap-6 overflow-x-hidden pb-24">
    {/* Profile Card Skeleton */}
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center gap-6 animate-pulse">
      <div className="w-24 h-24 rounded-full bg-gray-200" />
      <div className="flex-1 w-full space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>

    {/* Stats Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="h-20 bg-gray-200 rounded animate-pulse" />
      <div className="h-20 bg-gray-200 rounded animate-pulse" />
      <div className="h-20 bg-gray-200 rounded animate-pulse" />
    </div>

    {/* Form Skeleton */}
    <div className="space-y-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="h-10 bg-gray-200 rounded animate-pulse" />
      ))}
      <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
    </div>
  </div>
);

export default function Profile() {
  const { data: profile, isLoading: loading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => profileService.getProfile(),
  });

  const defaultValues: FormValues = {
    fullName: profile?.full_name || "",
    email: profile?.email || "",
    phone: profile?.phone || "",
    address: profile?.address || "",
    contactPreference: profile?.contact_preference || "email",
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
    defaultValues,
    mode: "onTouched",
  });

  useEffect(() => {
    if (profile) {
      reset({
        fullName: profile.full_name,
        email: profile.email,
        address: profile.address,
        contactPreference: profile.contact_preference,
        phone: formatPhone(profile.phone),
      });
    }
  }, [profile, reset]);

  const handleSave: SubmitHandler<FormValues> = async (data) => {
    try {
      await profileService.updateProfile({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone.replace(/\D/g, ""),
        ...(data.address && {
          address: data.address,
        }),
        contact_preference: data.contactPreference,
      });
      toast.success("Successfully updated!");
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col px-4 md:px-6 max-w-4xl mx-auto gap-6 overflow-x-hidden pb-24">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Avatar Placeholder */}
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400 border-4 border-white shadow-md relative">
          <img
            src={
              profile?.avatar ||
              `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`
            }
            alt={profile?.full_name || "User"}
            className="rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`;
            }}
          />
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {profile?.full_name}
              </div>
              <div className="text-gray-500 text-sm mt-1">{profile?.email}</div>
            </div>
            <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                {profile?.is_premium && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 border border-yellow-200">
                    <span className="material-icons">
                      <Star size="16px" />
                    </span>
                    Premium Member
                  </span>
                )}
                <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 border border-gray-200">
                  <span className="material-icons">
                    <Clock4 size="16px" />
                  </span>
                  Since {profile?.member_since}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(profile?.stats.resources || profile?.stats.resources === 0) && (
          <StatCard
            icon={<Heart />}
            value={profile?.stats.resources}
            label="Resources Saved"
            colorClass="text-orange-400"
          />
        )}

        {profile?.stats.videos && (
          <StatCard
            icon={<BookOpen />}
            value={profile?.stats.videos}
            label="Videos Watched"
            colorClass="text-yellow-500"
          />
        )}

        {profile?.stats.tools && (
          <StatCard
            icon={<TrendingUp />}
            value={profile?.stats.tools}
            label="Tools Used"
            colorClass="text-orange-500"
          />
        )}
      </div>

      <form
        className="w-full flex flex-col gap-6"
        onSubmit={handleSubmit(handleSave)}
        noValidate
      >
        <InfoCard icon={<User />} title="Personal Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Full Name"
              {...register("fullName")}
              defaultValue={defaultValues.fullName}
              error={errors.fullName?.message}
              required
            />
            <Input
              label="Email"
              type="email"
              {...register("email")}
              defaultValue={defaultValues.email}
              error={errors.email?.message}
              required
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  label="Phone"
                  {...field}
                  value={formatPhone(field.value)}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    field.onChange(formatted);
                  }}
                  error={errors.phone?.message}
                  required
                />
              )}
            />
            <Input
              label="Address"
              {...register("address")}
              defaultValue={defaultValues.address ?? ""}
              error={errors.address?.message}
            />
            {/* TODO: Add Google Maps Fill */}
          </div>
          <div className="flex flex-col gap-4">
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
              <legend className="fieldset-legend text-gray-500 text-xs font-normal">
                If we need to reach out do you prefer emails or text messages? *
              </legend>
              <div className="flex items-center gap-4 mt-2">
                <label className="label cursor-pointer flex items-center">
                  <input
                    type="radio"
                    value="email"
                    {...register("contactPreference")}
                    className="radio radio-primary"
                  />
                  <span className="ml-2">Email</span>
                </label>

                <label className="label cursor-pointer flex items-center">
                  <input
                    type="radio"
                    value="text"
                    {...register("contactPreference")}
                    className="radio radio-primary"
                  />
                  <span className="ml-2">Text messages</span>
                </label>
              </div>
              {errors.contactPreference && (
                <p className="text-red-500 text-xs mt-2">
                  {String(errors.contactPreference?.message)}
                </p>
              )}
            </fieldset>
          </div>
        </InfoCard>

        <InfoCard
          icon={<CreditCard />}
          title="Subscription and Billing"
          subtitle="Manage your membership and billing"
        >
          TBD
        </InfoCard>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`btn bg-orange-500 hover:bg-orange-600 text-gray-800 cursor-pointer w-full ${(isSubmitting || !isValid) && "bg-gray-500"}`}
            disabled={isSubmitting || !isValid}
          >
            <Save />
            {isSubmitting ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
