import { supabase } from "../SupabaseClient";

export async function downloadFile() {
  const bucketName = "CV_Storage";
  const filePath = "MY-RESUME.pdf";

  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(filePath);

  if (error) {
    console.error("Error downloading file:", error.message);
    return;
  }

  // Create a URL for the file
  const url = URL.createObjectURL(data);

  // Create a download link
  const a = document.createElement("a");
  a.href = url;
  a.download = "MY-RESUME.pdf"; // The file name for the downloaded file
  document.body.appendChild(a);
  a.click();

  // Clean up
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
